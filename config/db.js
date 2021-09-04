const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nourhafsi:nourhafsi@cluster1.1kdgk.mongodb.net/myqttDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);
