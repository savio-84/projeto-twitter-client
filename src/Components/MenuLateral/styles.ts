import styled from 'styled-components';

export const Container = styled.div`
    width: 28vw;
    height: 100vh;
    background-color: black;
    padding: 0;
    color: white;
    position: absolute;
    left: 0px;
    display: flex;
    border-right-width: 1px;
    border-right-color: gray;

    ul {
      position: absolute;
      width: 45%;
      top: 0;
      right: 0;

        li {
            margin-bottom: 5px;
            list-style: none;

            margin-top: 20px;

            font-size: 34px;
            font-weight: bolder;

            display: flex;
            flex-direction: row;
        }
    }
`

export const CreateTweetButton = styled.button`
  background-color: #1991da;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 15px;
  font-weight: bolder;
  border-radius: 100px;
  color: #ffffff;
  border-width: 0px;
  width: 100%;
`

export const ProfileButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45%;
  background-color: black;
  color: #ffffff;
  font-size: 12px;
  border-width: 0px;
  text-align: left;

`
