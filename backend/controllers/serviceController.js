const fs = require("fs");
const path = require("path");
const ServiceProvider = require("../models/ServiceProvider");
const Accommodation = require("../models/Accommodation");
const Food = require("../models/Food");
const Guide = require("../models/LocalGuide");
const Ride = require("../models/Ride");

// Add item
const addItem = async (req, res) => {
  const serviceProvider = await ServiceProvider.findById(req.user.id);
  const { providedservice } = serviceProvider;
  const {
    name,
    description,
    portionSize,
    seats,
    accommodationSize,
    guideType,
    price,
  } = req.body;
  const providerId = req.user.id;
  const image = req.file ? req.file.filename : null;

  try {
    let newItem;
    switch (providedservice) {
      case "Food":
        newItem = new Food({
          providerId,
          name,
          image,
          description,
          portionSize,
          price,
        });
        break;
      case "Accommodation":
        newItem = new Accommodation({
          providerId,
          name,
          image,
          description,
          accommodationSize,
          price,
        });
        break;
      case "Guide":
        newItem = new Guide({
          providerId,
          name,
          image,
          description,
          guideType,
          price,
        });
        break;
      case "Rides":
        newItem = new Ride({
          providerId,
          name,
          image,
          description,
          seats,
          price,
        });
        break;
      default:
        return res.status(400).json({ message: "Invalid service type" });
    }

    const savedItem = await newItem.save();
    const imageUrl = image ? `/uploads/${image}` : null;
    res.status(201).json({ ...savedItem._doc, imageUrl });
  } catch (error) {
    res.status(500).json({ message: "Error adding item", error });
  }
};

// Delete item
const deleteItem = async (req, res) => {
  const serviceProvider = await ServiceProvider.findById(req.user.id);
  const { providedservice } = serviceProvider;
  const { id } = req.params;
  const providerId = req.user.id;

  try {
    let deletedItem;
    switch (providedservice) {
      case "Food":
        deletedItem = await Food.findOneAndDelete({
          providerId,
          _id: id,
        });
        break;
      case "Accommodation":
        deletedItem = await Accommodation.findOneAndDelete({
          providerId,
          _id: id,
        });
        break;
      case "Guide":
        deletedItem = await Guide.findOneAndDelete({
          providerId,
          _id: id,
        });
        break;
      case "Rides":
        deletedItem = await Ride.findOneAndDelete({
          providerId,
          _id: id,
        });
        break;
      default:
        return res.status(400).json({ message: "Invalid service type" });
    }

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Delete the image file if it exists
    if (deletedItem.image) {
      const imagePath = path.join(__dirname, "../uploads", deletedItem.image);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Error deleting image file:", err);
        }
      });
    }

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting item", error });
  }
};

// Get item by ID
const getItemById = async (req, res) => {
  const serviceProvider = await ServiceProvider.findById(req.user.id);
  const { providedservice } = serviceProvider;
  const { id } = req.params;
  const providerId = req.user.id;

  try {
    let item;
    switch (providedservice) {
      case "Food":
        item = await Food.findOne({ providerId, _id: id });
        break;
      case "Accommodation":
        item = await Accommodation.findOne({ providerId, _id: id });
        break;
      case "Guide":
        item = await Guide.findOne({ providerId, _id: id });
        break;
      case "Rides":
        item = await Ride.findOne({ providerId, _id: id });
        break;
      default:
        return res.status(400).json({ message: "Invalid service type" });
    }

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    const imageUrl = item.image ? `/uploads/${item.image}` : null;
    res.status(200).json({ ...item._doc, imageUrl });
  } catch (error) {
    res.status(500).json({ message: "Error getting item", error });
  }
};

//Get all items
const getItems = async (req, res) => {
  const serviceProvider = await ServiceProvider.findById(req.user.id);
  const { providedservice } = serviceProvider;
  const providerId = req.user.id;

  try {
    let items;
    switch (providedservice) {
      case "Food":
        items = await Food.find({ providerId });
        break;
      case "Accommodation":
        items = await Accommodation.find({ providerId });
        break;
      case "Guide":
        items = await Guide.find({ providerId });
        break;
      case "Rides":
        items = await Ride.find({ providerId });
        break;
      default:
        return res.status(400).json({ message: "Invalid service type" });
    }

    const itemsWithImageUrl = items.map((item) => {
      const imageUrl = item.image ? `/uploads/${item.image}` : null;
      return { ...item._doc, imageUrl };
    });

    res.status(200).json(itemsWithImageUrl);
  } catch (error) {
    res.status(500).json({ message: "Error getting items", error });
  }
};

// Update item
const updateItem = async (req, res) => {
  const serviceProvider = await ServiceProvider.findById(req.user.id);
  const { providedservice } = serviceProvider;
  const { id } = req.params;
  const providerId = req.user.id;
  const {
    name,
    description,
    portionSize,
    seats,
    accommodationSize,
    guideType,
    price,
  } = req.body;
  const image = req.file ? req.file.filename : undefined;

  try {
    let existingItem;
    let updatedItem;
    switch (providedservice) {
      case "Food":
        existingItem = await Food.findOne({ providerId, _id: id });
        if (!existingItem) {
          return res.status(404).json({ message: "Item not found" });
        }
        updatedItem = await Food.findOneAndUpdate(
          { providerId, _id: id },
          {
            ...(name && { name }),
            ...(description && { description }),
            ...(portionSize && { portionSize }),
            ...(price && { price }),
            ...(image && { image }),
          },
          { new: true }
        );
        break;
      case "Accommodation":
        existingItem = await Accommodation.findOne({ providerId, _id: id });
        if (!existingItem) {
          return res.status(404).json({ message: "Item not found" });
        }
        updatedItem = await Accommodation.findOneAndUpdate(
          { providerId, _id: id },
          {
            ...(name && { name }),
            ...(description && { description }),
            ...(accommodationSize && { accommodationSize }),
            ...(price && { price }),
            ...(image && { image }),
          },
          { new: true }
        );
        break;
      case "Guide":
        existingItem = await Guide.findOne({ providerId, _id: id });
        if (!existingItem) {
          return res.status(404).json({ message: "Item not found" });
        }
        updatedItem = await Guide.findOneAndUpdate(
          { providerId, _id: id },
          {
            ...(name && { name }),
            ...(description && { description }),
            ...(guideType && { guideType }),
            ...(price && { price }),
            ...(image && { image }),
          },
          { new: true }
        );
        break;
      case "Rides":
        existingItem = await Ride.findOne({ providerId, _id: id });
        if (!existingItem) {
          return res.status(404).json({ message: "Item not found" });
        }
        updatedItem = await Ride.findOneAndUpdate(
          { providerId, _id: id },
          {
            ...(name && { name }),
            ...(description && { description }),
            ...(seats && { seats }),
            ...(price && { price }),
            ...(image && { image }),
          },
          { new: true }
        );
        break;
      default:
        return res.status(400).json({ message: "Invalid service type" });
    }

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Delete old image if new one is uploaded
    if (image && existingItem.image && existingItem.image !== image) {
      const oldImagePath = path.join(
        __dirname,
        "../uploads",
        existingItem.image
      );
      fs.unlink(oldImagePath, (err) => {
        if (err) {
          console.error("Error deleting old image file:", err);
        }
      });
    }

    const imageUrl = updatedItem.image ? `/uploads/${updatedItem.image}` : null;
    res.status(200).json({ ...updatedItem._doc, imageUrl });
  } catch (error) {
    res.status(500).json({ message: "Error updating item", error });
  }
};

//get all items for students
const getItemsForStudents = async (req, res) => {
  const { serviceType } = req.params;

  try {
    let items;
    switch (serviceType) {
      case "food":
        items = await Food.find().populate("providerId");
        break;
      case "accommodation":
        items = await Accommodation.find().populate("providerId");
        break;
      case "guide":
        items = await Guide.find().populate("providerId");
        break;
      case "rides":
        items = await Ride.find().populate("providerId");
        break;
      default:
        return res.status(400).json({ message: "Invalid service type" });
    }

    const itemsWithImageUrl = items.map((item) => {
      const imageUrl = item.image ? `/uploads/${item.image}` : null;
      return { ...item._doc, imageUrl };
    });

    res.status(200).json(itemsWithImageUrl);
  } catch (error) {
    res.status(500).json({ message: "Error getting items", error });
  }
};

module.exports = {
  addItem,
  deleteItem,
  getItemById,
  getItems,
  updateItem,
  getItemsForStudents,
};
