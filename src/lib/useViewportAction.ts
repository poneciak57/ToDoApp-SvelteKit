let intersectionObserver: IntersectionObserver;

function buildThresholdList(): number[] {
	let thresholds = [];
	let numSteps = 20;
  
	for (let i=1.0; i<=numSteps; i++) {
	  let ratio = i/numSteps;
	  thresholds.push(ratio);
	}
  
	thresholds.push(0);
	return thresholds;
  }

function ensureIntersectionObserver() {
	if (intersectionObserver) return;
  intersectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				// console.log("entry: ",entry)
				if(entry.isIntersecting){
					if(entry.intersectionRatio >= 0.75){
						// console.log(entry)
						entry.target.dispatchEvent(new CustomEvent('enterViewport'));
					}
				}else{
					if(entry.intersectionRatio == 0){
						entry.target.dispatchEvent(new CustomEvent('exitViewport'));
					}
				}
			});
		},{
			root: null,
			rootMargin: "0px",
			threshold: buildThresholdList()
		}
	);
}

export default function viewport(element: Element) {
	ensureIntersectionObserver();
	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	}
}