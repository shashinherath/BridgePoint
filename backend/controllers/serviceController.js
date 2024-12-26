// Create Service
const createService = async (req, res) => {
  const { title, description, provider } = req.body;

  try {
    const newService = new Service({ title, description, provider });
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ message: "Error creating service", error });
  }
};

// Get All Services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services", error });
  }
};

// Update Service
const updateService = async (req, res) => {
  const { id } = req.params;
  const { title, description, provider } = req.body;

  try {
    const updatedService = await Service.findByIdAndUpdate(
      id,
      { title, description, provider },
      { new: true }
    );
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error });
  }
};

// Delete Service
const deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    await Service.findByIdAndDelete(id);
    res.status(200).json({ message: "Service deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service", error });
  }
};

module.exports = {
  createService,
  getAllServices,
  updateService,
  deleteService,
};
