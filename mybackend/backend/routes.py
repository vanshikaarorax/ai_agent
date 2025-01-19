# backend/routes.py

from flask import Blueprint, request, jsonify
from flask_cors import cross_origin  # Import the cross_origin decorator
from dataset import get_dataset
from recommendation import recommend_agents

# Blueprint for main routes
main_routes = Blueprint('main', __name__)

@main_routes.route('/recommend', methods=['GET'])
@cross_origin(origins=["http://localhost:3000"])  # Allow requests only from localhost:3000
def recommend():
    try:
        # Get user query from the request
        user_query = request.args.get("query")
        if not user_query:
            return jsonify({"error": "No query provided"}), 400

        # Load dataset
        dataset = get_dataset()

        # Get recommendations
        recommendations = recommend_agents(user_query, dataset)

        # Convert recommendations to list of dictionaries
        recommendations_list = recommendations.to_dict(orient='records')

        # Return recommendations as JSON
        return jsonify(recommendations_list)

    except Exception as e:
        return jsonify({"error": str(e)}), 500
