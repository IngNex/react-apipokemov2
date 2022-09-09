import styled from 'styled-components'

export const Objects = styled.div`
    background: var(--color-secondary);
    border: 0.3rem;
    box-shadow: 0 0 1rem 0 rgba(255,255,255, .1);
    display: grid;
    grid-template: 10rem auto / 1fr;
    overflow: hidden;
    animation: showCard 0.5s linear;
    border-radius: 2.5rem;

    @keyframes showCard {
        from {
            opacity: 0;
        }
    }
`

export const ObjectHeader = styled.div`
    background: var(--color-primary);
    padding: 1.2rem;
    text-align: right;
`

export const Estado= styled.div`
    background: var(--color-secondary);
    display: inline-flex;
    color: var(--color-dark);
    padding: 0.5rem 1rem;
    border-radius: 2.5rem;
    font-size: 1.2rem;
    width: auto;
    justify-content: space-between;
    align-items: center;
    columns: 1rem;
`
export const Weaknesses=styled.div`
    display: block;
    height: 1.5rem;//1rem
    width: ${props => props.width ? props.width : '1.5rem'};//1rem
    border-radius: ${props => props.borderrads ? props.borderrads : '50%'};
    text-align: center;
    margin: 0 0.5rem 0 0.5rem; // espacio entre partes
    font-weight: bold;
    background: ${
        props => {
            switch(props.backgroundColor){
                case 'Grass': return '#4af84a';
                case 'Fire': return '#ff4141';
                case 'Water': return '#1fa7d4';
                case 'Bug': return '#34d192';
                case 'Normal': return '#b3bcbc';
                case 'Electric': return '#ffbb00';
                case 'Poison': return '#840084';
                case 'Ghost': return '#271f1f';
                case 'Psychic': return '#e600ff';
                case 'Ground': return '#a76124';
                case 'Fighting': return '#773e0b';
                case 'Ice': return '#0044ff';
                case 'Rock': return '#cead53';
                case 'Dragon': return '#8b74ff';
                default: return '#fff';
            }
        }
    };

`
export const ObjectBody = styled.div`
    padding: 8rem 2rem 4rem;
    position: relative;
    h2{
        width: 100%;
        background: var(--color-primary);
        color: var(--color-dark);
        border-radius: 0.5rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        transition-property: background, color;
        font-size: 1.8rem;
    }

    p{
        font-size: 90%;
        width: 100%;
        background: #001C4D;
        color: var(--color-light);
        border-radius: 0.5rem;
        height: 4rem;
        margin-top: 2rem;
        line-height: 4rem;
        text-align: center;

        span{
            font-weight: bold;
        }
    }
`
export const ObjectFigures = styled.div`
    position: absolute;
    display: block;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    top: -6rem;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 1rem 0 #fff;/*#fed072;*/
    overflow: hidden;
    background: rgb(218,0,0);
background: linear-gradient(180deg, rgba(218,0,0,1) 0%, rgba(255,75,75,1) 45%, rgba(0,0,0,1) 50%, rgba(255,230,230,1) 55%, rgba(255,255,255,1) 100%);
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    
`