const express = require("express");
const router = express.Router();
const Articles = require("../../models/article");

router.get("/", (req, res) => {
    Articles.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).res.json(`Error:${err}`));
});

// REQUEST//add new article
router.post("/add", (req, res) => {
    const newArticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        aurthorName: req.body.aurthorName
    });

    newArticle
        .save()
        .then(() => res.json("The new Article posted succesfully!!"))
        .catch(err => res.status(400).res.json(`Error:${err}`));
});

router.get("/:id", (req, res) => {
    Articles.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.put("/update/:id", (req, res) => {
    Articles.findById(req.params.id)
        .then(article => {
            article.title = req.body.title;
            article.article = req.body.article;
            article.aurthorName = req.body.aurthorName;

            article
                .save()
                .then(() => res.json("The article is updated successfully!"))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})


router.delete("/:id", (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
        .then(() => res.json("The article is deleted!"))
        .catch(err => res.status(400).json(`Error: ${err}`));

})

module.exports = router;