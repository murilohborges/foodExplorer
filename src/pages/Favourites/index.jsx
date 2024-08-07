import { Container, FixedContent, Main, BackButton, List } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { SideMenu } from "../../components/SideMenu/index.jsx";
import { useState } from "react";
import plateIcon from '../../assets/plateIcon.png';
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api.js";
import { FavPlate } from "../../components/FavPlate/index.jsx";

export function Favourites() {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  async function receivedSearch(search){
    return
  }

  async function receivedMenuIsOpen(isOpen){
    setMenuIsOpen(isOpen);
  }

  async function onCloseMenu(){
    setMenuIsOpen(false);
  }

  return(
    <Container $menuIsOpen={menuIsOpen}>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={onCloseMenu}
        receivedSearch={receivedSearch}
      />

      <Header 
        receivedSearch={receivedSearch}
        receivedMenuIsOpen={receivedMenuIsOpen}
      />

      <FixedContent>
        <Main>
          <BackButton onClick={handleBack}>
            <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 1.14568C12.0976 1.5362 12.0976 2.16937 11.7071 2.55989L2.41421 11.8528L11.7071 21.1457C12.0976 21.5362 12.0976 22.1694 11.7071 22.5599C11.3166 22.9504 10.6834 22.9504 10.2929 22.5599L0.292893 12.5599C-0.0976311 12.1694 -0.0976311 11.5362 0.292893 11.1457L10.2929 1.14568C10.6834 0.755152 11.3166 0.755152 11.7071 1.14568Z" fill="white"/>
            </svg>
            Voltar
          </BackButton>

          <h1>Meus favoritos</h1>

          <List>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
            <FavPlate/>
          </List>

        </Main>

        <Footer/>
      </FixedContent>
        
    </Container>
  )
}