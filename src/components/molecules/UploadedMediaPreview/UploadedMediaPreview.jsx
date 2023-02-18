import { MediaPreview } from "../MediaPreview/MediaPreview";
import style from "./UploadedMediaPreview.module.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const UploadedMediaPreview = ({ media, setNewData }) => {
	const handleDeleteItem = (element) => {
		let mediaFiltered = media.filter((media) => media.handle !== element.handle);
		setNewData((current) => ({ ...current, media: mediaFiltered }));
	};

	/**Drag and drop functions*/
	const reorder = (list, startIndex, endIndex) => {
		const result = [...list];
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		return result;
	};

	const onDragEnd = (result) => {
		const { source, destination } = result;
		//Cuando se deja el elemento fuera del droppable
		if (!destination) {
			return;
		}
		//Cuando se deja el elemento en su misma posicion
		if (source.index === destination.index && source.droppableId === destination.droppableId) {
			return;
		}
		//Ordenamiento
		const newOrderMedia = reorder(media, source.index, destination.index);
		setNewData((current) => ({ ...current, media: newOrderMedia }));
	};

	return (
		<DragDropContext onDragEnd={(result) => onDragEnd(result)}>
			<Droppable droppableId='media'>
				{(droppableProvided) => (
					<div
						{...droppableProvided.droppableProps}
						ref={droppableProvided.innerRef}
						className={style.mediaPreviewContainer}
					>
						{media.map((element, index) => (
							<Draggable key={element.handle} draggableId={element.handle} index={index}>
								{(draggableProvided) => (
									<div
										{...draggableProvided.draggableProps}
										ref={draggableProvided.innerRef}
										{...draggableProvided.dragHandleProps}
									>
										<MediaPreview media={element} onClick={() => handleDeleteItem(element)} />
									</div>
								)}
							</Draggable>
						))}
						{droppableProvided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
