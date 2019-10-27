import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m Philemon and I’m a Full-Stack Web Developer!" />
			</Thumbnail>
			<Details>
				<h1>Hey There!</h1>
				<p>
					I'm a self-starting full-stack JS developer with a passion for UI/UX,
					and collaborative projects. I love learning new languages and
					frameworks: currently focused on ReactJS.
				</p>
				<Button as={AnchorLink} href="#contact">
					Let's Connect
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
