import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";

const Banner = styled.section`
  height: 800px;
  background: url(https://png.pngtree.com/png-clipart/20210829/original/pngtree-music-album-cover-modern-style-color-sns-png-image_6664686.jpg)
    no-repeat center / cover;
`;

const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
  a {
    width: 45%;
    height: 500px;
  }
`;

const Con = styled.div`
  height: 100%;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Section>
        <Link to={"/sub/0"}>
          <Con $bgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UUKISlr-wMwXKt_hpmKL6zLHOJv3a7-6RA&usqp=CAU"></Con>
        </Link>
        <Link to={"/sub/1"}>
          <Con $bgUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-album-cover-design-template-0b55f32b3855ba41707a08e386e95d6e_screen.jpg?ts=1561485226"></Con>
        </Link>
        {/* <Link to={"/sub/2"}>
          <Con $bgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThoI2v3qF_TjIUD_QLQfL7CIAyFj18FSoPEQ&usqp=CAU"></Con>
        </Link>
        <Link to={"/sub/3"}>
          <Con $bgUrl="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWMlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"></Con>
        </Link> */}
      </Section>
      <Section>
        <Link to={"/sub/2"}>
          <Con $bgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThoI2v3qF_TjIUD_QLQfL7CIAyFj18FSoPEQ&usqp=CAU"></Con>
        </Link>
        <Link to={"/sub/3"}>
          <Con $bgUrl="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWMlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"></Con>
        </Link>
      </Section>
    </div>
  );
};
