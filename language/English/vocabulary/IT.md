# IT vocabulary for a Technical Advisor

Các cụm dưới đây giúp review và tư vấn rõ ràng mà không dùng từ quá phức tạp.

## Architecture and decisions

| Collocation | Practical meaning | Example |
|---|---|---|
| current state | trạng thái hiện tại | Let us document the current state first. |
| target state | trạng thái mục tiêu | What is the target state? |
| design constraint | giới hạn thiết kế | Is this a real design constraint? |
| trade-off | đánh đổi | The main trade-off is cost versus control. |
| decision owner | người quyết định | Who is the decision owner? |
| supporting evidence | bằng chứng hỗ trợ | What evidence supports this conclusion? |
| dependency boundary | ranh giới phụ thuộc | Is the dependency boundary clear? |
| backward compatible | tương thích ngược | Is the schema change backward compatible? |

## Delivery and operations

| Collocation | Practical meaning | Example |
|---|---|---|
| rollout plan | kế hoạch triển khai dần | We need a safe rollout plan. |
| rollback path | đường quay lại | Is the rollback path tested? |
| deployment window | khung giờ triển khai | What is the deployment window? |
| production ready | sẵn sàng production | What is missing before this is production ready? |
| operational impact | tác động vận hành | What is the operational impact? |
| failure scenario | kịch bản lỗi | Have we tested this failure scenario? |
| recovery time | thời gian khôi phục | What recovery time can the business accept? |
| clear owner | người chịu trách nhiệm rõ ràng | We need a clear owner for this action. |
| follow-up action | việc tiếp theo | I will record the follow-up actions. |
| known limitation | hạn chế đã biết | Let us document this as a known limitation. |

## Reliability, data and security

| Collocation | Practical meaning | Example |
|---|---|---|
| single point of failure | điểm lỗi duy nhất | Is this a single point of failure? |
| retry strategy | chiến lược retry | Does the retry strategy use backoff? |
| idempotent operation | thao tác chạy lại an toàn | Is the consumer idempotent? |
| partial failure | lỗi một phần | What happens during a partial failure? |
| data retention | thời gian giữ dữ liệu | What is the data retention period? |
| least privilege | quyền tối thiểu | Does the identity follow least privilege? |
| public exposure | mở ra Internet | Do we need this public exposure? |
| audit trail | dấu vết kiểm toán | Is there an audit trail for this change? |
| service limit | giới hạn dịch vụ | Have we checked the service limit? |
| cost estimate | ước tính chi phí | Do we have a monthly cost estimate? |

## Reusable review patterns

- My understanding is **[current state]**. Is that correct?
- The main risk I see is **[risk]** because **[reason]**.
- Before we decide, I would like to verify **[evidence]**.
- I recommend **[option]** for now, with **[control]** and a clear rollback path.
- This can work, provided that **[condition]**.
