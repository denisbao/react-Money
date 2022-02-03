import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  },[])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$100,00</td>
            <td>Desenvolvimento</td>
            <td>03/01/2022</td>
          </tr>
          <tr>
            <td>Condomínio</td>
            <td className="withdraw">- R$300,00</td>
            <td>Casa</td>
            <td>01/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}