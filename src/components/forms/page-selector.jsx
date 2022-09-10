import IconButton from '../buttons/icon-button';
import ArrowLeftIcon from '../icons/arrow-left-icon,';
import ArrowRightIcon from '../icons/arrow-right-icon';

const PageSelector = ({ page, setPage, totalPages }) => {
	const isFirstPage = page === 1;
	const isLastPage = page === totalPages || totalPages === 0;

	return (
		<div className='flex items-center gap-4'>
			<IconButton
				filled
				disabled={isFirstPage}
				icon={ArrowLeftIcon}
				onClick={() => setPage(page - 1)}
			/>
			<span>
				Página {page} de {totalPages || 1}
			</span>
			<IconButton
				filled
				disabled={isLastPage}
				icon={ArrowRightIcon}
				onClick={() => setPage(page + 1)}
			/>
		</div>
	);
};

export default PageSelector;
