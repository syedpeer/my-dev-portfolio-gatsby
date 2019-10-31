import styled from 'styled-components'

export const Wrapper = styled.div`
	background-image: url('../illustrations/details.svg');
	background-size: contain;
	background-position: left top;
	background-repeat: no-repeat;
`

export const SkillsWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;
	padding-left: 2rem;

	@media (max-width: 960px) {
		padding-left: unset;
		width: 100%;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 26pt;
		color: #212121;
	}

	p {
		margin-bottom: 2.5rem;
		font-size: 20pt;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;
	}
	button {
		margin-left: 30px;

		@media (max-width: 960px) {
			/* width: 3.75rem; */
			/* margin-top: 2rem; */
			flex-direction: column;
		}
		@media (max-width: 460px) {
			margin-top: 2rem;
			flex-direction: column;
		}
	}
	a:visited {
		color: white;
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	img {
		width: 100%;
	}
`

export const Resume = styled.div`
	/* display: block; */
	margin-left: auto;
	margin-right: auto;
	width: 43.5%;
	background: #0074d9;
	margin-bottom: 2rem;
	margin-top: 3rem;
	font-size: 26pt;
	color: #fff;
	text-align: center;
	border-radius: 3px;
	cursor: pointer;
	justify-content: center;
	padding: 0.7rem 2.5rem;

	@media (max-width: 960px) {
		position: relative;
	}
`
export const Resume2 = styled.div`
	/* display: block; */
	margin-left: auto;
	margin-right: auto;
	width: 15%;
	background: #0074d9;
	margin-bottom: 2rem;
	margin-top: 3rem;
	font-size: 26pt;
	color: #fff;
	text-align: center;
	border-radius: 3px;
	cursor: pointer;
	justify-content: center;
	padding: 0.7rem 2.5rem;

	@media (max-width: 960px) {
		position: relative;
	}
`
// export const Collap = styled.div`
// 	box-shadow: 3px 5px 15px white;
// `
