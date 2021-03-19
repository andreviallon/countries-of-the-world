const formatPop = (pop: number) => {
    return pop.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export default formatPop