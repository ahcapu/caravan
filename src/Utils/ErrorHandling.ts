export class ErrorHandling {
  static modeHandling = async (error: any) => {
    if (process.env.MODE === "production") {
      return "something went wrong";
    } else if (process.env.MODE === "development") {
      return { error };
    }
  };
}
