const initialState = {
    nodes: [
      { id: '1', position: { x: 0, y: 200 }, data: { label: 'Start' }, sourcePosition: 'right' },
    ],
    edges: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NODES':
        return { ...state, nodes: action.payload };
        case 'SET_EDGES':
          return { 
            ...state, 
            edges: action.payload.map(edge => ({ ...edge, animated: true })) 
          };
      case 'DELETE_NODE':
        const newNodes = state.nodes.filter((node) => node.id !== action.payload);
        const newEdges = state.edges.filter(
          (edge) => edge.source !== action.payload && edge.target !== action.payload
        );
        return { ...state, nodes: newNodes, edges: newEdges };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  