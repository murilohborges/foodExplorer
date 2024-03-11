import { Container, Main, PlateImage, BackButton, PlateInfo, TextInfo } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";

import plateAvatar from '../../assets/Dish.png';

export function Details() {

  return(
    <Container>
      <Header/>

      <Main>

        <BackButton>
          <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 1.14568C12.0976 1.5362 12.0976 2.16937 11.7071 2.55989L2.41421 11.8528L11.7071 21.1457C12.0976 21.5362 12.0976 22.1694 11.7071 22.5599C11.3166 22.9504 10.6834 22.9504 10.2929 22.5599L0.292893 12.5599C-0.0976311 12.1694 -0.0976311 11.5362 0.292893 11.1457L10.2929 1.14568C10.6834 0.755152 11.3166 0.755152 11.7071 1.14568Z" fill="white"/>
          </svg>
          Voltar
        </BackButton>

        <PlateInfo>
          <PlateImage>
            <img src={plateAvatar} alt="Foto do prato"/>
          </PlateImage>

          <TextInfo>
            <h1>Salada Ravanello</h1>

            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

            <div className="wrapper-tags">
              <Tag title="alface"/>
              <Tag title="cebola"/>
              <Tag title="pão naan"/>
              <Tag title="pepino"/>
              <Tag title="rabanete"/>
              <Tag title="tomate"/>
              
            </div>

            <div className="button-edit">
              <Button title="Editar prato"/>
            </div>
          </TextInfo>

 
          
        </PlateInfo>


      </Main>
      
      <Footer/>
        
    </Container>
  )
}