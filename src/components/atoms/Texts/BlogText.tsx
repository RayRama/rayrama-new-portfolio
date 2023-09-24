import styled from "styled-components";
import { NavLink } from "react-router-dom";

const BlogText = styled(NavLink)`
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);

  transform: rotate(90deg) translate(-50%, -50%);

  text-decoration: none;
  color: ${(props) => props.theme.text};

  z-index: 1;
`;

const BlogTextComponent = (props: any) => {
  return (
    <BlogText to="https://cerita-ray.vercel.app/" target="_blank">
      <h2>Blog</h2>
    </BlogText>
  );
};

export default BlogTextComponent;
