
package com.bazaarwhale.marketplace.repository;

import com.bazaarwhale.marketplace.model.Message;
import com.bazaarwhale.marketplace.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findByUserAndRecipient(User sender, User recipient);
    List<Message> findByUserOrRecipientOrderBySentAtDesc(User sender, User recipient);
    long countByRecipientAndReadFalse(User recipient);
}
