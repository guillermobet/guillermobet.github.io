$(document).ready(function() {
	runQuery()
});


function runQuery() {

var resultData = [
{
	"queryName": "SQ1",
	"query": "PREFIX drugcategory: <http://www4.wiwiss.fu-berlin.de/drugbank/resource/drugcategory/> <br> PREFIX drugbank: <http://www4.wiwiss.fu-berlin.de/drugbank/resource/drugbank/> <br> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> <br>PREFIX kegg: <http://bio2rdf.org/ns/kegg#> <br>	SELECT ?drugDesc ?cpd ?equation WHERE {<br>		?drug drugbank:drugCategory drugcategory:cathartics .<br>		?drug drugbank:keggCompoundId ?cpd .<br>		?drug drugbank:description ?drugDesc .<br>		?enzyme kegg:xSubstrate ?cpd .<br>		?enzyme	rdf:type kegg:Enzyme .<br>		?reaction kegg:xEnzyme ?enzyme .<br>		?reaction kegg:equation ?equation .	<br>}",
	"results": {
		"FedX": {
			"decomposition": [
				{
					"triple": "?drug drugbank:drugCategory drugcategory:cathartics",
					"source": ["Drugbank"]
				},
				{
					"triple": "?drug drugbank:keggCompoundId ?cpd",
					"source": ["Drugbank"]
				},
				{
					"triple": "?drug drugbank:description ?drugDesc",
					"source": ["Drugbank"]
				},
				{
					"triple": "?enzyme kegg:xSubstrate ?cpd",
					"source": ["Kegg"]
				},
				{
					"triple": "?enzyme	rdf:type kegg:Enzyme",
					"source": ["Kegg"]
				},
				{
					"triple": "?reaction kegg:xEnzyme ?enzyme",
					"source": ["Kegg"]
				},
				{
					"triple": "?reaction kegg:equation ?equation",
					"source": ["Kegg"]
				}

				],
			"executiontime": "1.09071087837",
            "cardinality": "3"
			},
		"MULDER": {
			"decomposition": [
				{
					"triple": "?drug drugbank:drugCategory drugcategory:cathartics",
					"source": ["Drugbank"]
				},
				{
					"triple": "?drug drugbank:keggCompoundId ?cpd",
					"source": ["Drugbank"]
				},
				{
					"triple": "?drug drugbank:description ?drugDesc",
					"source": ["Drugbank"]
				},
				{
					"triple": "?enzyme kegg:xSubstrate ?cpd",
					"source": ["Kegg"]
				},
				{
					"triple": "?enzyme	rdf:type kegg:Enzyme",
					"source": ["Kegg"]
				},
				{
					"triple": "?reaction kegg:xEnzyme ?enzyme",
					"source": ["Kegg"]
				},
				{
					"triple": "?reaction kegg:equation ?equation",
					"source": ["Kegg"]
				}

				],
			"executiontime": "0.0484898090363",
            "cardinality": "3"
		}
	}
},
{
	"queryName": "SQ2",
	"query": "PREFIX drugbank: <http://www4.wiwiss.fu-berlin.de/drugbank/resource/drugbank/> <br> PREFIX drugcategory: <http://www4.wiwiss.fu-berlin.de/drugbank/resource/drugcategory/><br> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#><br>PREFIX bio2RDF: <http://bio2rdf.org/ns/bio2rdf#><br> PREFIX purl: <http://purl.org/dc/elements/1.1/><br> PREFIX kegg: <http://bio2rdf.org/ns/kegg#><br> SELECT distinct ?drug ?title WHERE {<br>?drug drugbank:drugCategory drugcategory:micronutrient .<br>?drug drugbank:casRegistryNumber ?id .<br>?keggDrug rdf:type kegg:Drug .<br>?keggDrug bio2RDF:xRef ?id .<br>?keggDrug purl:title ?title .<br>}",
	"results": {
		"FedX": {
			"decomposition": [
				{
					"triple": "?drug drugbank:drugCategory drugcategory:micronutrient",
					"source": ["Drugbank"]
				},
				{
					"triple": "?drug drugbank:casRegistryNumber ?id",
					"source": ["Drugbank"]
				},
				{
					"triple": "?keggDrug rdf:type kegg:Drug",
					"source": ["Kegg"]
				},
				{
					"triple": "?keggDrug bio2RDF:xRef ?id",
					"source": ["Kegg", "Chebi"]
				},
                {
					"triple": "?keggDrug purl:title ?title",
					"source": ["Kegg", "Chebi"]
				}
				],
			"executiontime": "130.962049007",
            "cardinality": "24"
			},
		"MULDER": {
			"decomposition": [
				{
					"triple": "?drug drugbank:drugCategory drugcategory:micronutrient",
					"source": ["Drugbank"]
				},
				{
					"triple": "?drug drugbank:casRegistryNumber ?id",
					"source": ["Drugbank"]
				},
				{
					"triple": "?keggDrug rdf:type kegg:Drug",
					"source": ["Kegg"]
				},
				{
					"triple": "?keggDrug bio2RDF:xRef ?id",
					"source": ["Kegg"]
				},
                {
					"triple": "?keggDrug purl:title ?title",
					"source": ["Kegg"]
				}
				],
			"executiontime": "0.0750548839569",
            "cardinality": "28"
		}
	}
},
{
	"queryName": "SQ3",
	"query": "PREFIX drugbank: <http://www4.wiwiss.fu-berlin.de/drugbank/resource/drugbank/><br>PREFIX bio2RDF: <http://bio2rdf.org/ns/bio2rdf#><br> SELECT * WHERE{<br>?drug drugbank:affectedOrganism  'Humans and other mammals'.<br>?drug drugbank:casRegistryNumber ?cas .<br>?keggDrug bio2RDF:xRef ?cas .<br>?keggDrug bio2RDF:mass ?mass .<br>OPTIONAL{ <br>?drug drugbank:biotransformation ?transform <br>}<br>}",
	"results": {
		"FedX": {
			"decomposition": [
				{
					"triple": "?drug drugbank:affectedOrganism  'Humans and other mammals'.",
					"source": ["Drugbank"]
				},
				{
					"triple": "?drug drugbank:casRegistryNumber ?cas",
					"source": ["Drugbank"]
				},
				{
					"triple": "?keggDrug bio2RDF:xRef ?cas",
					"source": ["Kegg", "Chebi"]
				},
				{
					"triple": "?keggDrug bio2RDF:mass ?mass",
					"source": ["Kegg"]
				},
                {
					"triple": "OPTIONAL{ ?drug drugbank:biotransformation ?transform }",
					"source": ["Drugbank"]
				}
				],
			"executiontime": "19.774793148",
            "cardinality": "1620"
			},
		"MULDER": {
			"decomposition": [
                {
					"triple": "?drug drugbank:affectedOrganism  'Humans and other mammals'.",
					"source": ["Drugbank"]
				},
				{
					"triple": "?drug drugbank:casRegistryNumber ?cas",
					"source": ["Drugbank"]
				},
				{
					"triple": "?keggDrug bio2RDF:xRef ?cas",
					"source": ["Kegg"]
				},
				{
					"triple": "?keggDrug bio2RDF:mass ?mass",
					"source": ["Kegg"]
				},
                {
					"triple": "OPTIONAL{ ?drug drugbank:biotransformation ?transform }",
					"source": ["Drugbank"]
				}
				],
			"executiontime": "0.901671171188",
            "cardinality": "1620"
		}
	}
},
{
	"queryName": "SQ4",
	"query": "PREFIX drugbank: <http://www4.wiwiss.fu-berlin.de/drugbank/resource/drugbank/><br>PREFIX diseasome:<http://www4.wiwiss.fu-berlin.de/diseasome/resource/diseasome/><br> SELECT ?drug ?disease ?name WHERE{<br>?drug drugbank:molecularWeightAverage ?weight.<br>?drug drugbank:possibleDiseaseTarget ?disease.<br>?disease diseasome:name ?name.<br>}",
	"results": {
		"FedX": {
			"decomposition": [
				{
					"triple": "?drug drugbank:molecularWeightAverage ?weight",
					"source": ["Drugbank"]
				},
				{
					"triple": "?drug drugbank:possibleDiseaseTarget ?disease",
					"source": ["Drugbank"]
				},
				{
					"triple": "?disease diseasome:name ?name",
					"source": ["diseasome"]
				}
				],
			"executiontime": "4.02295804024",
            "cardinality": "8120"
			},
		"MULDER": {
			"decomposition": [
				{
					"triple": "?drug drugbank:molecularWeightAverage ?weight",
					"source": ["Drugbank"]
				},
				{
					"triple": "?drug drugbank:possibleDiseaseTarget ?disease",
					"source": ["Drugbank"]
				},
				{
					"triple": "?disease diseasome:name ?name",
					"source": ["diseasome"]
				}
				],
			"executiontime": "1.38392996788",
            "cardinality": "8120"
		}
	}
},
{
	"queryName": "SQ5",
	"query": "PREFIX dailymed: <http://www4.wiwiss.fu-berlin.de/dailymed/resource/dailymed/><br>PREFIX linkedCT: <http://data.linkedct.org/resource/linkedct/><br>PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#><br> SELECT distinct * WHERE{ <br>?intervention a linkedCT:intervention. <br>?intervention linkedCT:intervention_name ?intervention_name. <br> ?intervention linkedCT:intervention_id ?intervention_id.<br>?intervention rdfs:seeAlso ?dailymedDrug.<br>?dailymedDrug dailymed:dosage ?dosage.<br>?dailymedDrug dailymed:description ?description.<br>?dailymedDrug dailymed:inactiveIngredient ?inactiveIngredient.<br>?dailymedDrug dailymed:possibleDiseaseTarget ?possibleDiseaseTarget .>} ",
	"results": {
		"FedX": {
			"decomposition": [
				{
					"triple": "?intervention a linkedCT:intervention",
					"source": ["LinkedCT"]
				},
				{
					"triple": "?intervention linkedCT:intervention_name ?intervention_name.",
					"source": ["LinkedCT"]
				},
				{
					"triple": "?intervention linkedCT:intervention_id ?intervention_id.",
					"source": ["LinkedCT"]
				},
				{
					"triple": "?intervention rdfs:seeAlso ?dailymedDrug.",
					"source": ["LinkedCT", "Affymetrix", "Chebi", "Sider"]
				},
				{
					"triple": "?dailymedDrug dailymed:dosage ?dosage.",
					"source": ["Dailymed"]
				},{
					"triple": "?dailymedDrug dailymed:description ?description.",
					"source": ["Dailymed"]
				},
				{
					"triple": "?dailymedDrug dailymed:inactiveIngredient ?inactiveIngredient.",
					"source": ["Dailymed"]
				},
				{
					"triple": "?dailymedDrug dailymed:possibleDiseaseTarget ?possibleDiseaseTarget .",
					"source": ["Dailymed"]
				}
				],
			"executiontime": "600",
            "cardinality": "0"
			},
		"MULDER": {
			"decomposition": [
				{
					"triple": "?intervention a linkedCT:intervention",
					"source": ["LinkedCT"]
				},
				{
					"triple": "?intervention linkedCT:intervention_name ?intervention_name.",
					"source": ["LinkedCT"]
				},
				{
					"triple": "?intervention linkedCT:intervention_id ?intervention_id.",
					"source": ["LinkedCT"]
				},
				{
					"triple": "?intervention rdfs:seeAlso ?dailymedDrug.",
					"source": ["LinkedCT"]
				},
				{
					"triple": "?dailymedDrug dailymed:dosage ?dosage.",
					"source": ["Dailymed"]
				},{
					"triple": "?dailymedDrug dailymed:description ?description.",
					"source": ["Dailymed"]
				},
				{
					"triple": "?dailymedDrug dailymed:inactiveIngredient ?inactiveIngredient.",
					"source": ["Dailymed"]
				},
				{
					"triple": "?dailymedDrug dailymed:possibleDiseaseTarget ?possibleDiseaseTarget .",
					"source": ["Dailymed"]
				}
				],
			"executiontime": "78.9390921593",
            "cardinality": "524694"
		}
	}
},
];

	var query = $('input[name=query]:checked').val();
	var method = $('input[name=engine]:checked').val();
	//console.log(query + " " + method);

	if (query != undefined && method != undefined) {
		var i = parseInt(query.substr(2,2)) - 1;
		console.log(i);

		var plotData = [];

		if (resultData[i].queryName == query && method == 'MULDER') {
			$("h6").empty().html(resultData[i].query);
			//console.log(resultData[i].results.MULDER);

			for (j = 0; j < resultData[i].results.MULDER.decomposition.length; j++) {
				plotData.push(['triple ' + j, resultData[i].results.MULDER.decomposition[j].source]);
			}

		}
		if (resultData[i].queryName == query && method == 'FedX') {
			$("h6").empty().html(resultData[i].query);
			for (j = 0; j < resultData[i].results.FedX.decomposition.length; j++) {
				plotData.push(['triple ' + j, resultData[i].results.FedX.decomposition[j].source]);
			}
		}
		console.log(plotData);
		plotGraph(plotData);
	}



};

function plotGraph(data) {
	//
// Generated by the Exaile Playlist Analyzer plugin.
// (C) 2014 Dustin Spicuzza <dustin@virtualroadside.com>
//
// This work is licensed under the Creative Commons Attribution 4.0
// International License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by/4.0/.
//
// Inspired by http://www.findtheconversation.com/concept-map/
// Loosely based on https://bl.ocks.org/mbostock/4063550
//

// transform the data into a useful representation
// 1 is inner, 2, is outer

// need: inner, outer, links
//
// inner: 
// links: { inner: outer: }


var outer = d3.map();
var inner = [];
var links = [];

var outerId = [0];

data.forEach(function(d){
	
	if (d == null)
		return;
	
	i = { id: 'i' + inner.length, name: d[0], related_links: [] };
	i.related_nodes = [i.id];
	inner.push(i);
	
	if (!Array.isArray(d[1]))
		d[1] = [d[1]];
	
	d[1].forEach(function(d1){
		
		o = outer.get(d1);
		
		if (o == null)
		{
			o = { name: d1,	id: 'o' + outerId[0], related_links: [] };
			o.related_nodes = [o.id];
			outerId[0] = outerId[0] + 1;	
			
			outer.set(d1, o);
		}
		
		// create the links
		l = { id: 'l-' + i.id + '-' + o.id, inner: i, outer: o }
		links.push(l);
		
		// and the relationships
		i.related_nodes.push(o.id);
		i.related_links.push(l.id);
		o.related_nodes.push(i.id);
		o.related_links.push(l.id);
	});
});

data = {
	inner: inner,
	outer: outer.values(),
	links: links
}

// sort the data -- TODO: have multiple sort options
outer = data.outer;
data.outer = Array(outer.length);


var i1 = 0;
var i2 = outer.length - 1;

for (var i = 0; i < data.outer.length; ++i)
{
	if (i % 2 == 1)
		data.outer[i2--] = outer[i];
	else
		data.outer[i1++] = outer[i];
}

console.log(data.outer.reduce(function(a,b) { return a + b.related_links.length; }, 0) / data.outer.length);


// from d3 colorbrewer: 
// This product includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).
var colors = ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]
var color = d3.scale.linear()
    .domain([60, 275])
    .range([colors.length-1, 0])
    .clamp(true);

var diameter = 900;
var rect_width = 100;
var rect_height = 20;

var link_width = "3px"; 

var il = data.inner.length;
var ol = data.outer.length;

var inner_y = d3.scale.linear()
    .domain([0, il])
    .range([-(il * rect_height)/2, (il * rect_height)/2]);

mid = (data.outer.length/2.0)
var outer_x = d3.scale.linear()
    .domain([0, mid, mid, data.outer.length])
    .range([15, 170, 190 ,355]);

var outer_y = d3.scale.linear()
    .domain([0, data.outer.length])
    .range([0, diameter / 2 - 120]);


// setup positioning
data.outer = data.outer.map(function(d, i) { 
    d.x = outer_x(i);
    d.y = diameter/3;
    return d;
});

data.inner = data.inner.map(function(d, i) { 
    d.x = -(rect_width / 2);
    d.y = inner_y(i);
    return d;
});


function get_color(name)
{
    var c = Math.round(color(name));
    if (isNaN(c))
        return '#33BEFF';	// fallback color
    
    return colors[c];
}

// Can't just use d3.svg.diagonal because one edge is in normal space, the
// other edge is in radial space. Since we can't just ask d3 to do projection
// of a single point, do it ourselves the same way d3 would do it.  


function projectX(x)
{
    return ((x - 90) / 180 * Math.PI) - (Math.PI/2);
}

var diagonal = d3.svg.diagonal()
    .source(function(d) { return {"x": d.outer.y * Math.cos(projectX(d.outer.x)), 
                                  "y": -d.outer.y * Math.sin(projectX(d.outer.x))}; })            
    .target(function(d) { return {"x": d.inner.y + rect_height/2,
                                  "y": d.outer.x > 180 ? d.inner.x : d.inner.x + rect_width}; })
    .projection(function(d) { return [d.y, d.x]; });


var svg = d3.select("#sparqlGraphic").html("").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
  .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
    

// links
var link = svg.append('g').attr('class', 'links').selectAll(".link")
    .data(data.links)
  .enter().append('path')
    .attr('class', 'link')
    .attr('id', function(d) { return d.id })
    .attr("d", diagonal)
    .attr('stroke', function(d) { return get_color(d.inner.name); })
    .attr('stroke-width', link_width);

// outer nodes

var onode = svg.append('g').selectAll(".outer_node")
    .data(data.outer)
  .enter().append("g")
    .attr("class", "outer_node")
    .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
    .on("mouseover", mouseover)
    .on("mouseout", mouseout);
  
onode.append("circle")
    .attr('id', function(d) { return d.id })
    .attr("r", 4.5);
  
onode.append("circle")
    .attr('r', 20)
    .attr('visibility', 'hidden');
  
onode.append("text")
	.attr('id', function(d) { return d.id + '-txt'; })
    .attr("dy", ".31em")
    .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
    .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
    .text(function(d) { return d.name; });
  
// inner nodes
  
var inode = svg.append('g').selectAll(".inner_node")
    .data(data.inner)
  .enter().append("g")
    .attr("class", "inner_node")
    .attr("transform", function(d, i) { return "translate(" + d.x + "," + d.y + ")"})
    .on("mouseover", mouseover)
    .on("mouseout", mouseout);
  
inode.append('rect')
    .attr('width', rect_width)
    .attr('height', rect_height)
    .attr('id', function(d) { return d.id; })
    .attr('fill', function(d) { return get_color(d.name); });
  
inode.append("text")
	.attr('id', function(d) { return d.id + '-txt'; })
    .attr('text-anchor', 'middle')
    .attr("transform", "translate(" + rect_width/2 + ", " + rect_height * .75 + ")")
    .text(function(d) { return d.name; });

// need to specify x/y/etc

d3.select(self.frameElement).style("height", diameter - 150 + "px");

function mouseover(d)
{
	// bring to front
	d3.selectAll('.links .link').sort(function(a, b){ return d.related_links.indexOf(a.id); });	
	
    for (var i = 0; i < d.related_nodes.length; i++)
    {
        d3.select('#' + d.related_nodes[i]).classed('highlight', true);
        d3.select('#' + d.related_nodes[i] + '-txt').attr("font-weight", 'bold');
    }
    
    for (var i = 0; i < d.related_links.length; i++)
        d3.select('#' + d.related_links[i]).attr('stroke-width', '8px');
}

function mouseout(d)
{   	
    for (var i = 0; i < d.related_nodes.length; i++)
    {
        d3.select('#' + d.related_nodes[i]).classed('highlight', false);
        d3.select('#' + d.related_nodes[i] + '-txt').attr("font-weight", 'normal');
    }
    
    for (var i = 0; i < d.related_links.length; i++)
        d3.select('#' + d.related_links[i]).attr('stroke-width', link_width);
  
}

};