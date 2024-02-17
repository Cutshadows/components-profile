export const allowDrop = ( ev: React.DragEvent<HTMLDivElement> ) => {
	ev.preventDefault();
}

export const  drag = ( ev: React.DragEvent<HTMLDivElement> ) => {
	const element: HTMLElement | any = ev.target;
	ev.dataTransfer.setData("text", element.id);
}

export const  drop = ( ev: React.DragEvent<HTMLDivElement> ) => {
	ev.preventDefault();
	const element: HTMLElement | any = ev.target;

	const data = ev.dataTransfer.getData("text");
	element.appendChild(document.getElementById(data) as HTMLElement);
}