import styled from "styled-components";
import {  NavLink } from "react-router-dom";

const Wrapper = styled.main`
  max-width: 1024px;
  width: 95%;
  margin: ${(props) => props.theme.margin.full} auto;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PageTitle = styled.h1`
  display: inline-block;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.large};
`;

const Navigation = styled.nav`
  display: inline-block;
  margin-left: auto;
  margin-right: 0;
`;

const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: ${(props) => props.theme.border.width} solid
    ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.border.radius};
  font-size: ${(props) => props.theme.fontSizes.tiny};
  padding: ${(props) => props.theme.padding.quarter}
    ${(props) => props.theme.padding.quarter};
  transition: all 0.2 ease-in-out;

  &:hover, &:focus {
    background: ${(props) => props.theme.colors.secondary};
    border-color: ${(props) => props.theme.colors.secondary};
  }
`;

const SaveButton = styled(Button)`
  font-size: ${props => props.theme.fontSizes.small};
  margin-top: ${props => props.theme.margin.full};
  padding-left: ${props => props.theme.padding.full};
  padding-right: ${props => props.theme.padding.full};
`;


const ButtonLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.accent};
  background: ${(props) => props.theme.colors.white};
  border: ${(props) => props.theme.border.width} solid
    ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.border.radius};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: bold;
  padding: ${(props) => props.theme.padding.half}
    ${(props) => props.theme.padding.full};
  text-decoration: none;
  transition: all 0.2 ease-in-out;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.secondary};
  }

  &.active {
    display: none;
    visibility: hidden;
  }

  & + & {
    margin-left: ${props => props.theme.margin.half};
  }
`;


const Form = styled.form`
  display: block;
  text-align: center;
  
  fieldset {
    display: inline-block;
    margin: 0 auto;
    border-radius: ${(props) => props.theme.border.radius};
    border: 1px solid ${props => props.theme.border.color};
    padding: ${(props) => props.theme.padding.full};
    background: ${props => props.theme.colors.offwhite};
  }

  legend {
    padding: ${(props) => props.theme.padding.half}
      ${(props) => props.theme.padding.full};
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: ${props => props.theme.border.radius};
    font-weight: bold;
  }

  label {
    display: inline-block;
    vertical-align: middle;
    width: 125px;
    margin-right: ${(props) => props.theme.margin.full};
    text-align: right;
  }

  input[type=text],
  input[type=telephone],
  input[type=email] {
    font-size: ${props => props.theme.fontSizes.text};
    border-radius: ${props => props.theme.border.radius};
    border: 1px solid ${props => props.theme.colors.primary};
    padding: ${props => props.theme.padding.half};
    min-width: 200px;
  }
`;

const FormItem = styled.div`
  & + & {
    margin-top: ${(props) => props.theme.margin.full};
  }
`;

export {
  Wrapper,
  TitleContainer,
  PageTitle,
  Navigation,
  Button,
  SaveButton,
  ButtonLink,
  Form,
  FormItem,
};
