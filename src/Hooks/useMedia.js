import React from 'react'

const useMedia = (media) => {

    const [match, setMatch] = React.useState(null);

    React.useEffect(() => {

        function changeMatch() {
            const {matches} = window.matchMedia(media);
            setMatch(matches);
        }

        // Para que quando renderizar a tela já cheque se é ou não mobile
        changeMatch();

        window.addEventListener('resize', changeMatch);

        return () => {
            window.removeEventListener('resize', changeMatch);
        }
    }, [media]);

    return match;
}

export default useMedia
