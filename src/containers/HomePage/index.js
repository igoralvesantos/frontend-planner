import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks, createTask } from "../../actions/planner";
import { Container } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import Planner from "../../components/Planner";
import TaskForm from "../../components/TaskForm";

export function HomePage() {
  const initialState = {
    text: "",
    day: "",
  };

  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const allTasks = useSelector((state) => state.planner.allTasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch, allTasks]);

  const handleInputChange = (event) => {
    const auxForm = { ...form };
    auxForm[event.target.name] = event.target.value;
    setForm(auxForm);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(createTask(form.text, form.day));
    setForm(initialState);
  };

  return (
    <Container>
      <TaskForm
        day={form.day}
        text={form.text}
        onChange={handleInputChange}
        onSubmit={handleOnSubmit}
      />
      <Planner tasks={allTasks} />
    </Container>
  );
}

export default HomePage;
