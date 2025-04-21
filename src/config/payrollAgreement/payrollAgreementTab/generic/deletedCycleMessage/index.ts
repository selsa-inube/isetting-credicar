import { ComponentAppearance } from "@enum/appearances";

const deletedCycleMessage = {
  success: {
    title: "Ciclo de pago eliminado.",
    description: "El ciclo de pago se eliminó correctamente.",
    appearance: ComponentAppearance.SUCCESS,
    duration: 5000,
  },
  error: {
    title: "Error al eliminar ciclo de pago.",
    description:
      "No fue posible cancelar la solicitud por favor intenta más tarde",
    appearance: ComponentAppearance.DANGER,
    duration: 5000,
  },
};

export { deletedCycleMessage };
