import { gql } from "@apollo/client";

export const QUERY_ME = gql`
{
    me {
        _id
        email
    }
}
`;

export const QUERY_GET_APPOINTMENTS = gql`
{
    getAppointments {
        _id
        date
        user {
            _id
            email
        }
    }
}
`