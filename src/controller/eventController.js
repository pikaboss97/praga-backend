exports.create = async (req, res)  => {
    try {
      let eventData = req.body;
      let data = await eventService.create(eventData);
      if(!data) res.status(409).send(util.errorResponse("", "error", "no se pudo crear el recurso"));
      res.status(201).send(util.succesResponse("createUser", "success", data));  
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  exports.list = async (req, res) => {
      try {
          const listUsers = await userService.list()
          res.status(200).json(util.succesResponse("listUsers", "success", listUsers));
      } catch (error) {
          res.status(500).json(error);
      }
  }