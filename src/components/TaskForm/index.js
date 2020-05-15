import React from "react";
import { FormCard, Input, Select } from "../../style/homePage";
import { Form, Button } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

export function TaskForm(props) {
  return (
    <FormCard>
      <Form onSubmit={props.onSubmit} layout="inline">
        <Input
          placeholder="Digite uma tarefa"
          name="text"
          onChange={props.onChange}
          value={props.text}
          required
        />
        <Select
          name="day"
          onChange={props.onChange}
          value={props.day}
          required
        >
          <option value="" disabled selected>Dia da Semana</option>
          <option value="Segunda">Segunda-Feira</option>
          <option value="Terça">Terça-Feira</option>
          <option value="Quarta">Quarta-Feira</option>
          <option value="Quinta">Quinta-Feira</option>
          <option value="Sexta">Sexta-Feira</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </Select>
        <Button
          appearance="primary"
          size="md"
          onClick={props.onSubmit}
        >
          Criar
        </Button>
      </Form>
    </FormCard>
  );
}

export default TaskForm;