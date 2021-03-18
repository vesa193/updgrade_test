import styled from "styled-components";
// import colors from "./colors";
// import sizes from "./sizes";

// const { base, margin, borderRadiusLarge } = sizes;

const Sidebar = styled.div`
position: fixed;
left: 0%;
top: 0%;
width: 300px;
height: 100vh;

background: linear-gradient(147.42deg, rgba(64, 72, 93, 0.4) 6.32%, rgba(96, 106, 130, 0.4) 92.25%), linear-gradient(128deg, #E6E7ED -79.65%, #F7F8FA 151.25%);
background-blend-mode: soft-light, normal;
box-shadow: -10px -10px 42px #FAFCFC, 10px 10px 40px #BDC1D1, inset 1px 1px 9px #E6E7EB;
border-radius: 0px 40px 40px 0px;
`;

const ProfilePicContainer = styled.div`
background: linear-gradient(147.42deg, rgba(64, 72, 93, 0.4) 6.32%, rgba(96, 106, 130, 0.4) 92.25%), linear-gradient(128deg, #E6E7ED -79.65%, #F7F8FA 151.25%);
background-blend-mode: soft-light, normal;
box-shadow: -7px -7px 16px #FAFBFC, 4px 3px 19px #BDC1D1, inset -1px -1px 16px #F5F6FA, inset 1px 1px 16px #E9EAF2;
border-radius: 50%;
width: 166px;
height: 166px;
display: flex;
align-items: center;
justify-content: center;
margin: 50px auto 30px auto;
`;

const ProfilePic = styled.div`
border-radius: 50%;
width: 111px;
height: 111px;
overflow: hidden;
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FullName = styled.p`
font-size: 18px;
text-align: center;
margin: 0 20px;
`;

const TabContainer = styled.div`
margin:50px 0;
`

const Tab = styled.div`
display: flex;
align-items: center;
margin: 20px 37px;
img {
  width: 33px;
  height: 33px;
  margin-right: 25px;
}
p {
  font-weight: bold;
font-size: 16px;
}
`

const SidebarLogo = styled.div`
box-shadow: -10px -10px 42px #FAFCFC, 10px 10px 40px #BDC1D1, inset 1px 1px 9px #E6E7EB;
background: linear-gradient(147.42deg, rgba(64, 72, 93, 0.4) 6.32%, rgba(96, 106, 130, 0.4) 92.25%), linear-gradient(128deg, #E6E7ED -79.65%, #F7F8FA 151.25%);
background-blend-mode: soft-light, normal;
border-radius: 20px;
width: 72px;
height: 72px;
display: flex;
align-items:center;
justify-content: center;
img {
  width: 68px;
}
`;

const SidebarLogoContainer = styled.div`
position: absolute;
margin: 0 auto;
bottom: 0%;
display: flex; 
justify-content: center;
width: 100%;
margin-bottom: 30px;
`


export { Sidebar, ProfilePicContainer , ProfilePic, ProfilePicture, FullName, Tab, TabContainer, SidebarLogo, SidebarLogoContainer };
