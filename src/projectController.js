import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { Auth } from "aws-amplify";

async function getProjects() {
  var myHeaders = new Headers();
  return await Auth.currentSession().then((creds) => {
    myHeaders.append("Authorization", creds.getIdToken().getJwtToken());
    myHeaders.append("Accept", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return fetch(process.env.NEXT_PUBLIC_PROJECTS_URL, requestOptions)
      .then((response) => response.json())
      .then((result) => result.Items)
      .catch((error) => console.log("error", error));
  });
}

async function getProject(uuid) {
  const params = {
    TableName: "Projects",
    Key: {
      uuid: { S: uuid },
    },
  };
  const config = Auth.configure();
  const credentials = await Auth.currentCredentials();
  const client = new DynamoDBClient({
    region: config.region,
    credentials: Auth.essentialCredentials(credentials),
  });
  const command = new GetItemCommand(params);
  return await client.send(command).then((res) => {
    return res.Item;
  });
}

export { getProjects, getProject };
