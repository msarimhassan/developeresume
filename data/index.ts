import { v4 as uuidv4 } from 'uuid';
import { IData } from '@/types';

const userData: IData = {
	header: {
		name: 'Muhammad Sarim Hassan',
		phoneNumber: '+923244628572',
		location: 'Lahore, Pakistan',
		email: 'msarimdev@gmail.com',
		linkedIn: 'linkedin.com/in/msarimhassan/',
		github: 'github.com/msarimhassan'
	},
	education: [
		{
			id: uuidv4(),
			degree: 'B.Sc. of Computer Sciences',
			university: 'University of Lahore',
			location: 'Lahore, Pakistan',
			duration: 'Sept 2018 - July 2022'
		}
	],
	skills: [
		{
			id: uuidv4(),
			name: 'Programming languages',
			skill: ['JavaScript', 'TypeScript']
		},
		{
			id: uuidv4(),
			name: 'Technologies',
			skill: [
				'Git',
				'HTML',
				'CSS',
				'React',
				'Next.js',
				'Redux Toolkit',
				'Tailwind CSS',
				'Styled Components',
				'MongoDB',
				'Node.js',
				'REST APIs',
				'React Native',
				'GraphQL',
				'Firebase'
			]
		},
		{
			id: uuidv4(),
			name: 'Soft Skills',
			skill: ['Ownership', 'Rigor', 'Team work', 'Communication']
		}
	],
	experience: [
		{
			id: uuidv4(),
			designation: 'Software Engineer',
			company: 'The Hexaa',
			location: 'Lahore, Pakistan',
			duration: '',
			tasks: [
				{
					id: uuidv4(),
					content: [
						`Implemented role-based authentication and authorization system using <strong>React Context API.</strong>.Engineered the front end of an employee management platform in React for a Canadian company that is helping <strong>3000+</strong>
                         employees.`,
						`Developed a time-logging feature to allow employees to log their daily work hours. Used <strong>Socket.IO</strong> to implement an in-app
                         notification system to notify employees if their logged hours are insufficient.`,
						`Developed a  data transformer using <strong>TypeScript</strong> and <strong>Socket.io</strong> to receive data and parse <strong>JSON</strong> data into <strong>HTML</strong>.`,
						`Wrote <strong>unit test cases</strong> for multiple products using <strong>Jest</strong> and <strong>React Testing Library</strong> to ensure code quality and facilitate easier testing.`,
						`Containerized multiple projects using <strong>Docker</strong>, which ensures consistency across development, testing, and production environments by isolating applications and their dependencies.`,
						`Implemented <strong>CI/CD</strong> pipelines on <strong>Bitbucket</strong> and <strong>GitHub Actions</strong> to enable continuous deployment, ensuring automated and efficient deployment processes for projects.`,
						`Developed and published an <strong><a target='_blank' href='https://www.npmjs.com/package/react-fetch-interceptor'>npm</a></strong> library designed to intercept fetch requests, providing users with enhanced control and flexibility over network requests within their applications.`,
						`Developed multiple reusable hooks using <strong>React.js</strong> for authentication management and parent window dimension calculation, enhancing code reusability and improving error handling capabilities.`,
						`Integrated <strong>Twilio SDK</strong> into <strong>Next.js</strong> to emit notifications, providing users with timely alerts and notifications.`,
						`Developed a reporting engine using <strong>React.js</strong> and the <strong>browser PDF API</strong> to dynamically generate various types of reports based on the data stored in the database.`,
						`Integrated <strong>Firebase</strong> notification system into <strong>Next.js</strong> to send user notifications within the web application, ensuring multiple users receive early alerts.`,
						`Developed a custom theme using <strong>Tailwind CSS</strong> for use across multiple projects, providing developers with a consistent and easily customizable styling solution.`
					]
				}
			]
		},
		{
			id: uuidv4(),
			designation: 'Associate Software Engineer',
			company: 'The Hexaa',
			location: 'Lahore, Pakistan',
			duration: 'May 2022 - December 2022',
			tasks: [
				{
					id: uuidv4(),
					projectName: 'Anatomic Iron',
					content: [
						`Developed a comprehensive e-commerce app using <strong>React</strong>, enabling users to sell a wide variety of products. Designed and implemented an intuitive admin panel using Reactjs, allowing administrators to efficiently manage and add new products.`,
						`Implemented cart functionality using <strong>Redux Toolkit</strong>, ensuring efficient state management and a seamless shopping experience.`,
						`Integrated dual-language support using <strong>i18next</strong>, making the platform accessible to a broader audience.`,
						`Incorporated real-time chat features using <strong>socket.io</strong>, enhancing user communication and support.`,
						`Utilized <strong>API Sauce</strong> to seamlessly integrate various APIs, facilitating smooth data interaction and functionality across the platform.`,
						`Integrated <strong>Stripe</strong> payment API to handle secure and reliable payment transactions, enhancing the overall user experience.`
					]
				}
			]
		}
	],
	projects: [],
	accomplishments: [
		`Winner, Web Development Competition by <a href="https://uol.edu.pk/">Univeristy of Lahore</a>, Lahore (2020)`,
		`Participating in Hactoberfest challenge since 2020.`
	]
};

export default userData;
