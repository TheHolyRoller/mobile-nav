export const useClosestMedia = () => {
    const [closest, setClosest] = useState('sm');

    useEffect(() => {
        const listener = () => setClosest(findClosest(queries));
        listener();
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener); //Cleanup
    }, []);

    return closest;
};
