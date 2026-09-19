# Technical discussions

Thể hiện vai trò TA bằng việc làm rõ context, so sánh option, nêu risk và cách kiểm chứng.

## Reusable phrases

| Situation | Natural sentence | Simpler alternative | More professional alternative |
|---|---|---|---|
| Ask for context | Could you walk me through the current flow? | How does it work now? | Could you walk me through the current flow, including the main dependencies? |
| Challenge | I see one risk with this approach. | This may cause a problem. | I have one concern about how this behaves during a partial failure. |
| Recommend | I suggest we test this with one service first. | Let us test it first. | My recommendation is to run a small pilot and review the evidence before scaling it. |
| Validate | What result would prove this works? | How will we test it? | Could we agree on the acceptance criteria and the evidence we need? |

## Realistic dialogue

### Architecture review

**Developer:** We want every service to call the new API directly.  
**You:** Could you show me the call flow and the failure path?  
**Developer:** If the API is down, each service will retry.  
**You:** That may create a retry storm. I suggest one retry policy, a clear timeout, and an idempotency check.  
**Architect:** Can you review a small proof of concept?  
**You:** Yes. Please include normal traffic, a timeout, and a 503 test. I will review the results tomorrow.  

### Incident evidence

**Developer:** The pod is running, so Kubernetes looks fine.  
**You:** Running is one useful signal. Is the pod Ready, and is it processing work?  
**Developer:** The queue is still growing.  
**You:** Then the user impact is still present. Let us check worker logs, queue age, and the last deployment together.  

## Useful vocabulary and collocations

- **current flow** — luồng hiện tại
- **failure path** — luồng khi lỗi
- **acceptance criteria** — tiêu chí chấp nhận
- **remaining risk** — rủi ro còn lại
- **supporting evidence** — bằng chứng hỗ trợ
