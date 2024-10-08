import { Container, PlateImage, Info, ButtonRemove } from './styles';
import plateIcon from '../../assets/plateIcon.png';
import { useAuth } from "../../hooks/auth.jsx";
import { api } from '../../services/api.js';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function CartPlate({ data, ...rest }) {
  const avatarUrl = data.plate_avatar ? `${api.defaults.baseURL}/files/${data.plate_avatar}` : plateIcon;
  const navigate = useNavigate();
  const { user } = useAuth()

  function handleDetails(id){
    const plateId = `${data.plate_id}`;
    id = plateId;
    navigate(`/details/${id}`);
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover o prato?");
    if(confirm) {
      const order_id = data.order_id;
      const cart = JSON.parse(localStorage.getItem(`@foodexplorer:cartuser${user.id}`));
      const cartFiltered = cart.filter((plate) => plate.order_id != order_id)
      localStorage.setItem(`@foodexplorer:cartuser${user.id}`, JSON.stringify(cartFiltered));
      location.reload();
    }
  }

  return (
    <Container >

        <PlateImage onClick={handleDetails}>
          <img src={avatarUrl} alt="Foto do prato"/>
        </PlateImage>

      <Info>
        <h1 onClick={handleDetails}>{data.plate_title}</h1>
        <p>Quantidade: {data.plate_amount}</p>
        <ButtonRemove onClick={handleRemove}>Remover do Carrinho</ButtonRemove>
      </Info>

    </Container>
  )
}