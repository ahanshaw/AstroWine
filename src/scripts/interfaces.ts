export interface WineProps {
	winery: string;
	wine: number;
	rating: {
		average: number;
		reviews: string;
	}
	location: string;
	image: string;
	id: number;
}