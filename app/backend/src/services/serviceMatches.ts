import Matches from '../database/models/Matches';

export default class MatchesService {
    static async finAllMatches() {
    const result = await Matches.findAll();
    return result;
    };
}