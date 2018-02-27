import cytoscape from "cytoscape"

const elements = [
  // list of graph elements to start with
  {
    // node a
    data: { id: "a" }
  },
  {
    // node b
    data: { id: "b" }
  },
  {
    // edge ab
    data   : { id: "e1", source: "b", target: "a" },
    classes: "unbundled-bezier"
  }
]

const style = [
  // the stylesheet for the graph
  {
    selector: "node",
    style   : {
      "background-color": "#abc",
      label             : "data(id)"
    }
  },

  {
    selector: "edge",
    style   : {
      width       : 3,
      opacity     : 0.666,
      "line-color": "#888"
    }
  },

  {
    selector: "edge.bezier",
    style   : {
      "curve-style"            : "bezier",
      "control-point-step-size": 40
    }
  },

  {
    selector: "edge.unbundled-bezier",
    style   : {
      "curve-style": "unbundled-bezier"
      // "control-point-distances": 120,
      // "control-point-weights"  : 0.1
    }
  }
]

var cy = cytoscape( {
  container: document.getElementById( "app" ), // container to render in

  elements,

  style,

  layout: {
    name: "grid",
    rows: 1
  }
} )
