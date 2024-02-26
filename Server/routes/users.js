const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken.js")

// UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJs.AES.encrypt(
                req.body.password, process.env.SECRET_KEY)
                .toString();
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json(updatedUser);

        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you can Update only your account!")
    }
})


// DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been delete....");
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you can Delete only your account!")
    }
})


// GET

router.get("/find/:id", async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err)
    }

})
// GET ALL
// using sort method we can fetch the latest data
// http://localhost:8800/api/users?new=true (with new query last 2 data)
// http://localhost:8800/api/users/ (without new query alldata)

router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query ?
                await User.find().sort({ _id: -1 }).limit(10) : await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("Not allowed to see all users!")
    }
})


// GET USER STATS
router.get("/stats/", async (req, res) => {
    // console.log('vghbjn')
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);
    // how many users are log in which particular month
    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" }
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json(data);

    } catch (err) {
        res.status(500).json(err)
    }
});
module.exports = router