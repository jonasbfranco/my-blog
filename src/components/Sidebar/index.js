import React from 'react'
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"


import * as S from './styled'


const Sidebar = () => (
    <S.SidebartWrapper>
        <Profile />
        <SocialLinks />
    </S.SidebartWrapper>
)

export default Sidebar