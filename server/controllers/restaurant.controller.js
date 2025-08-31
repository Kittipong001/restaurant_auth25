import Restaurant from "../models/restaurant.model.js";
const restaurantController = {};
//create and save a new restaurant
restaurantController.create = async (req, res) => {
  const { title, type, img } = req.body;
  //validate data
  if (!title || !type || !img) {
    res.status(400).send({ message: "Title, Type or Img can not be empty" });
    return;
  }

  await Restaurant.findOne({ where: { title: title } }).then((restaurant) => {
    if (restaurant) {
      res.status(400).send({ message: "Restaurant already exists!" });
      return;
    }
    const newRestaurant = {
      title,
      type,
      img,
    };

    Restaurant.create(newRestaurant)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "Something error while creating the restaurant",
        });
      });
  });
};
//Get All restaurant
restaurantController.getAll = async (req, res) => {
  await Restaurant.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Somethig error while getting all restaurant",
      });
    });
};
//Get Restaurant By Id
restaurantController.getById = async (req, res) => {
  const id = req.params.id;
  await Restaurant.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "No found restaurant with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Somethig error while getting restaurant with id" + id,
      });
    });
};
//Update a Restaurant ById
restaurantController.update = async (req, res) => {
  const id = req.params.id;
  const { title, type, img } = req.body;
  //validate data
  if (!title && !type && !img) {
    res.status(400).send({ message: "Title, Type and Img can not be empty!" });
    return;
  }
  await Restaurant.update(
    { title, type, img },
    {
      where: { id },
    }
  )
    .then((num) => {
      if (num[0] === 1) {
        res.send({ message: "Restaurant update successfully!" });
      } else {
        res.status(404).send({
          message:
            "Cannot update restaurant with id " +
            id +
            ".Maybe restaurant was not found.",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Somethig error while getting all restaurant",
      });
    });
};
//Delete a REstaurant by Id
restaurantController.deleteById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "Id is missing" });
    return;
  }
  await Restaurant.destroy({ where: { id } })
    .then((num) => {
      if (num === 1) {
        res.send({ message: "Restaurant was deleted successfully" });
      } else {
        res.status(404).send({
          message: "Cannot delete restaurant with id " + id + ".",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Somethig error while getting all restaurant",
      });
    });
};
export default restaurantController;