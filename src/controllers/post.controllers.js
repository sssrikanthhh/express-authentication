const router = require('express').Router();

const Post = require('../models/post.models');
const authenticate = require('../middlewares/authenticate');

router.post('/', authenticate, async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return res.status(201).send({ post });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

router.patch('/:id', authenticate, async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(201).send({ post });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

router.delete('/:id', authenticate, async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.status(201).send({ post });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

module.exports = router;