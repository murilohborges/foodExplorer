import { Container, Logo, InputSearch, ButtonNewPlate, ButtonLogout } from "./styles.js";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.jsx";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

export function Header({receivedSearch}) {
  const { signOut } = useAuth();
  const navigation = useNavigate();
  const [search, setSearch] = useState("");

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  useEffect(() => {
    receivedSearch(search);
  }, [search])

  return(
    <Container>

      <div className="header-content">
        <div className="menu-button">
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00023C0 0.447944 0.447715 0.000228882 1 0.000228882H23C23.5523 0.000228882 24 0.447944 24 1.00023C24 1.55251 23.5523 2.00023 23 2.00023H1C0.447715 2.00023 0 1.55251 0 1.00023ZM0 9.00023C0 8.44794 0.447715 8.00023 1 8.00023H23C23.5523 8.00023 24 8.44794 24 9.00023C24 9.55251 23.5523 10.0002 23 10.0002H1C0.447715 10.0002 0 9.55251 0 9.00023ZM0 17.0002C0 16.4479 0.447715 16.0002 1 16.0002H23C23.5523 16.0002 24 16.4479 24 17.0002C24 17.5525 23.5523 18.0002 23 18.0002H1C0.447715 18.0002 0 17.5525 0 17.0002Z" fill="white"/>
          </svg>
        </div>

        <Logo>
          <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6933 0.5L21.351 6.65327V18.9598L10.6933 25.1131L0.0354824 18.9598V6.65327L10.6933 0.5Z" fill="#065E7C"/>
          </svg>
          <h1>food explorer</h1>
          <h2>admin</h2>
        </Logo>

        
        <InputSearch>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.89499 3.61739C7.22926 2.72585 8.79794 2.25 10.4027 2.25H10.4027C12.5545 2.25014 14.6181 3.105 16.1397 4.62655C17.6613 6.14811 18.5161 8.21174 18.5163 10.3635V10.3636C18.5163 11.9683 18.0404 13.537 17.1489 14.8713C16.9924 15.1054 16.8244 15.3305 16.6456 15.5459L21.5694 20.4697C21.8623 20.7626 21.8623 21.2374 21.5694 21.5303C21.2765 21.8232 20.8016 21.8232 20.5087 21.5303L15.5849 16.6065C14.9626 17.1232 14.263 17.5467 13.5076 17.8596C12.025 18.4737 10.3937 18.6344 8.81978 18.3213C7.24589 18.0082 5.80019 17.2355 4.66548 16.1008C3.53078 14.9661 2.75803 13.5204 2.44497 11.9465C2.1319 10.3726 2.29258 8.74122 2.90668 7.25866C3.52078 5.77609 4.56072 4.50892 5.89499 3.61739ZM10.4026 3.75C9.09458 3.75001 7.81593 4.13789 6.72834 4.86459C5.64074 5.5913 4.79306 6.6242 4.2925 7.83268C3.79193 9.04116 3.66096 10.3709 3.91614 11.6538C4.17133 12.9368 4.80122 14.1152 5.72614 15.0401C6.65107 15.965 7.8295 16.5949 9.11241 16.8501C10.3953 17.1053 11.7251 16.9743 12.9336 16.4738C14.1421 15.9732 15.175 15.1255 15.9017 14.0379C16.6284 12.9503 17.0162 11.6717 17.0163 10.3636M10.4027 3.75C12.1567 3.75012 13.8388 4.44695 15.079 5.68721C16.3193 6.92748 17.0161 8.6096 17.0163 10.3636" fill="#C4C4CC"/>
          </svg>

          <input 
            type="text" 
            placeholder="Busque por pratos ou ingredientes" 
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputSearch>

        <ButtonNewPlate to="/new">Novo prato</ButtonNewPlate>
        
        <ButtonLogout onClick={handleSignOut}>
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.2891 11.75L27.5391 17M27.5391 17L22.2891 22.25M27.5391 17H13.5391M13.5391 28H6.53906C6.27385 28 6.01949 27.8946 5.83196 27.7071C5.64442 27.5196 5.53906 27.2652 5.53906 27V7C5.53906 6.73478 5.64442 6.48043 5.83196 6.29289C6.01949 6.10536 6.27385 6 6.53906 6H13.5391" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </ButtonLogout>

      </div>

        
    </Container>
  )
}