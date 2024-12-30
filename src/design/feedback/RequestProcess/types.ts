interface IRequestSteps {
  name: string;
  status: "pending" | "completed" | "error";
}

export type { IRequestSteps };
