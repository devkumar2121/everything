const mongoose = require("mongoose");

export class Database {
  private mongoURI: string;

  constructor(mongoURI: string) {
    this.mongoURI = mongoURI;
  }

  public async connect(): Promise<void> {
    try {
      await mongoose.connect(this.mongoURI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      });
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection failed", error);
      throw error;
    }
  }
}
