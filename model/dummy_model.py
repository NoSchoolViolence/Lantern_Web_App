import random
import json


def dummy_model(query: str):
    """A dummy model for API development."""
    terms = query_to_list(query)
    
    # some calculation
    results = {
        "Fighting": random.random(),
        "Stealing": random.random(),
        "Weapons Use": random.random()
    }

    return dict_to_json(results)


def query_to_list(q):
    """Parse query in json string to a list of behaviors."""
    loaded = json.loads(q)
    return loaded[0]["query"]


def dict_to_json(results):
    """Convert dictionary of violence-score to json string."""
    inner = [{"ViolenceType": k, "Score": v} for k, v in results.items()]
    return json.dumps([{"results": inner}])


print(dummy_model('[{"query": []}]'))  # test that the dummy model works