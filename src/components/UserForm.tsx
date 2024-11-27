type UserProps = {
  data: {
    name: string;
    email: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

const UserForm = ({ data, updateFieldHandler }: UserProps) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          required
          value={data.name || ""}
          onChange={(event) => updateFieldHandler("name", event.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          required
          value={data.email || ""}
          onChange={(event) => updateFieldHandler("email", event.target.value)}
        />
      </div>
    </div>
  )
}

export default UserForm;
