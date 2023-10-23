import axios from 'axios'

export const getGptUserLogs = async () => {
	
	try {
		let response = await axios.get(`/gpt-service/get-user-logs`);
		
		let user_logs = {};
		
		response?.data?.forEach(log => {
			if (!user_logs[log.type]) {
				user_logs[log.type] = [];
			}
			// let lastLog = user_logs[log.type]?.at(-1);
			// if (lastLog?.promt === log?.promt) {
			// 	if (!Array.isArray(lastLog?.result)) {
			// 		lastLog.result = [lastLog.result];
			// 		lastLog.currentResult = 0;
			// 	}
			// 	lastLog.result = [...lastLog?.result, log?.result]
			// }
			// else {
			user_logs[log.type] = [...user_logs[log.type], log];
			// }
		});

		
		return user_logs
	}
	catch (error) {
		console.error('getGptUserLogs', error);
	}
}
