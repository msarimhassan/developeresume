import data from '@/data';

const Experience = () => {
	const { experience } = data;
	return (
		<div>
			<h2 className="font-semibold text-lg uppercase border-b border-gray-400 mb-2">
				Work Experience
			</h2>
			<div className="flex justify-between">
				<h3 className="font-semibold">{'The Hexaa'}</h3>
				<span>{'December 2022 - Present'}</span>
			</div>
			{experience.map(exp => (
				<div key={exp.id}>
					<div className="flex justify-between">
						<h3>{exp.designation}</h3>
						<em>{exp.duration}</em>
					</div>
					<div className="my-2">
						<ul className="leading-5 space-y-3 w-[86%]">
							{exp.tasks.map(task => (
								<>
									{/* <div className="flex">
										<h3>
											<span className="font-semibold">
												Project:{' '}
											</span>
											<em key={task.id}>
												{task.projectName}
											</em>
										</h3>
									</div> */}
									{task.content.map((data: any, key: any) => {
										return (
											<div
												className="pl-4 space-x-2 flex"
												key={key}
											>
												<span>•</span>
												<li
													className="inline-block"
													dangerouslySetInnerHTML={{
														__html: data
													}}
												/>
											</div>
										);
									})}
								</>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default Experience;
