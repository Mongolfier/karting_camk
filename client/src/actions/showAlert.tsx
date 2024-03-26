import { createAlert, removeAlert, IAlert } from "../reducers/alerts";
import { v4 as uuidv4 } from "uuid";
import { AppDispatch } from "../store";

type IShowAlert = Omit<IAlert, "id"> & { id?: string };

export const showAlert = ({
  summary = "",
  detail = "",
  variant = "info",
  id,
}: IShowAlert) => {
  return (dispatch: AppDispatch) => {
    if (!id) id = uuidv4();

    dispatch(createAlert({ summary, detail, variant, id }));
    window.setTimeout(() => dispatch(removeAlert(id as string)), 5000);
  };
};
